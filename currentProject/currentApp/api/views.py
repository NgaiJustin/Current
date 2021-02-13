# from rest_framework import viewsets

# class VideoViewSet(viewsets.ModelViewSet):
#     serializer_class = VideoSerializer
#     queryset = Video.objects.all()

from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from currentApp.models import *
from .serializers import *


class VideoListView(ListAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = (permissions.AllowAny, )


class VideoDetailView(RetrieveAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = (permissions.AllowAny, )


class VideoCreateView(CreateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = (permissions.IsAuthenticated, )


class VideoUpdateView(UpdateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = (permissions.IsAuthenticated, )


class VideoDeleteView(DestroyAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = (permissions.IsAuthenticated, )