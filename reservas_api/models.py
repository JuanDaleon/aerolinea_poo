from django.db import models
import user_api.models as user_models
import vuelos_api.models as vuelos_models


class Reserva(models.Model):
    fecha = models.DateField(null=True, blank=True)
    estado = models.CharField(max_length=50, default='Reservado', null=True, blank=True)
    precio = models.IntegerField(null=True, blank=True)
    pasajero = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True, blank=True)
    vuelo = models.ForeignKey(vuelos_models.Vuelo, on_delete=models.CASCADE, null=True, blank=True)
    
    
    def __str__(self):
        return f'{self.pasajero} - {self.vuelo} ({self.fecha})'


class Pago(models.Model):
    fecha = models.DateField()
    metodo = models.CharField(max_length=50)
    total = models.IntegerField(null=True, blank=True)
    reserva = models.ForeignKey(Reserva, on_delete=models.CASCADE)