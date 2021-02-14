from django.contrib import admin

from .models import *


class ProfileAdmin(admin.ModelAdmin):
    filter_horizontal = ("following",)


class VideoAdmin(admin.ModelAdmin):
    filter_horizontal = ("likes",)


admin.site.register(Profile, ProfileAdmin)
admin.site.register(Video, VideoAdmin)