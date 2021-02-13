# from Videos.api.views import VideoViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', VideoViewSet, base_name='Videos')
# urlpatterns = router.urls

from django.urls import path

from .views import *


