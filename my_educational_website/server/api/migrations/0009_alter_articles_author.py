# Generated by Django 5.1.1 on 2024-10-21 16:37

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_delete_api'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='articles', to='api.user'),
        ),
    ]
