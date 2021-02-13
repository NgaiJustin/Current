from django.urls import path

from .views import *

urlpatterns = [
    path('', VideoListView.as_view()),
    path('create/', VideoCreateView.as_view()),
    path('<pk>', VideoDetailView.as_view()),
    path('<pk>/update/', VideoUpdateView.as_view()),
    path('<pk>/delete/', VideoDeleteView.as_view()),
]
