from django.urls import path
from .views import AeropuertosManager

urlpatterns = [
    path('api/aeropuertos/', AeropuertosManager.as_view(), name='aeropuerto-list'),
    path('api/aeropuertos/<int:aeropuerto_id>/', AeropuertosManager.as_view(), name='aeropuerto-detail'),
]