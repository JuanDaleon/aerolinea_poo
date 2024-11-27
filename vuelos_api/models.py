from django.db import models
import api_aeropuerto.models as aeropuerto_models

class Aerolinea(models.Model):
    nombre = models.CharField(max_length=100, null=True, blank=True)
    
    def __str__(self):
        return self.nombre


class Avion(models.Model):
    matricula = models.CharField(max_length=10, null=True, blank=True)
    modelo = models.CharField(max_length=100, null=True, blank=True)
    capacidad = models.IntegerField(null=True, blank=True)
    aerolinea = models.ForeignKey(Aerolinea, on_delete=models.CASCADE, null=True, blank=True)
    
    def __str__(self):
        return f'{self.modelo} ({self.matricula})'

class Vuelo(models.Model):
    origen = models.ForeignKey(aeropuerto_models.Aeropuerto, on_delete=models.CASCADE, related_name='vuelos_origen', null=True, blank=True)
    destino = models.ForeignKey(aeropuerto_models.Aeropuerto, on_delete=models.CASCADE, related_name='vuelos_destino', null=True, blank=True)
    duracion = models.IntegerField(null=True, blank=True)
    precio = models.FloatField(null=True, blank=True)
    avion = models.ForeignKey(Avion, on_delete=models.CASCADE, null=True, blank=True)
    
    fecha_salida = models.DateField(null=True, blank=True)
    fecha_llegada = models.DateField(null=True, blank=True)
    hora_salida = models.TimeField(null=True, blank=True)
    hora_llegada = models.TimeField(null=True, blank=True)
    
    def __str__(self):
        return f'{self.origen} -> {self.destino} ({self.fecha_salida})'

class Asiento(models.Model):
    numero = models.CharField(max_length=10, null=True, blank=True)
    clase = models.CharField(max_length=100, null=True, blank=True)
    disponibilidad = models.BooleanField(default=True)
    avion = models.ForeignKey(Avion, on_delete=models.CASCADE, null=True, blank=True)
    
    def __str__(self):
        return f'Asiento {self.numero} - {self.clase} ({self.avion})'