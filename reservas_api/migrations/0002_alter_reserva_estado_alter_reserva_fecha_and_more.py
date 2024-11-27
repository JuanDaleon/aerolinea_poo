# Generated by Django 5.1.3 on 2024-11-27 17:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reservas_api', '0001_initial'),
        ('user_api', '0003_user_password_user_usuario'),
        ('vuelos_api', '0004_aerolinea_avion_aerolinea'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reserva',
            name='estado',
            field=models.CharField(blank=True, default='Reservado', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='reserva',
            name='fecha',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='reserva',
            name='pasajero',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='user_api.user'),
        ),
        migrations.AlterField(
            model_name='reserva',
            name='vuelo',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='vuelos_api.vuelo'),
        ),
    ]