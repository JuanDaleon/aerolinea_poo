from django.db import models


class Pais(models.Model):
    nombre = models.CharField(max_length=100, null=True, blank=True)
    
    def __str__(self):
        return self.nombre


class Ciudad(models.Model):
    nombre = models.CharField(max_length=100, null=True, blank=True)
    pais = models.ForeignKey(Pais, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.nombre


class Aeropuerto(models.Model):
    nombre = models.CharField(max_length=100, null=True, blank=True)
    ciudad = models.ForeignKey(Ciudad, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.nombre + ' - ' + self.ciudad.nombre + ' - ' + self.ciudad.pais.nombre