from rest_framework import serializers
from currentApp.models import *


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ('id', 'title', 'content')