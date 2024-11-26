from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('user_api.urls')),
    path('', include('vuelos_api.urls')),
    path('', include('api_aeropuerto.urls')),
    path('', include('reservas_api.urls')),
]