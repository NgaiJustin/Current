from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    firstname = models.CharField(max_length=30, null=True, blank=True)
    lastname = models.CharField(max_length=30, null=True, blank=True)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    following = models.ManyToManyField(
        User, related_name='followers', blank=True)

    def __str__(self):
        return self.user.username

    # autocreate profile for new user
    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()


class Video(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="posts", null='true')
    title = models.CharField(max_length=120)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True, blank=True)
    likes = models.ManyToManyField(
        User, related_name="posts_liked", blank=True)

    def __str__(self):
        return f'{self.title} by {self.owner}'
