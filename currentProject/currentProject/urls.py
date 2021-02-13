from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    # ADMIN
    path('admin/', admin.site.urls),
    # AUTHENTICATION: HANDLED BY REST FRAMEWORK
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    # API's
    path('api/', include('currentApp.api.urls')),
    # SINGLE PAGE VIEW: simply renders index.html from React build folder
    # re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]
