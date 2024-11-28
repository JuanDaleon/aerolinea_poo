from django.urls import path
from .views import ReservasManager, ReservasUsuario

urlpatterns = [
    path('api/reservas/', ReservasManager.as_view(), name='reserva-list'),
    path('api/reservas/<int:reserva_id>/', ReservasManager.as_view(), name='reserva-detail'),
    path('api/reservas/usuario/', ReservasUsuario.as_view(), name='reserva-usuario'),
]