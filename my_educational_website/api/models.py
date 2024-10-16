from django.db import models

# Create your models here.
class User(models.Model):
    pseudo = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100, default='Doe')
    firstname = models.CharField(max_length=100, default='John')
    age = models.IntegerField()
    email = models.EmailField(max_length=100, default='user@example.com')
    

    def __str__(self):
        return self.pseudo
