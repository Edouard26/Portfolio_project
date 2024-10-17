from django.db import models


class User(models.Model):
    pseudo = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100, default='Doe')
    firstname = models.CharField(max_length=100, default='John')
    age = models.IntegerField()
    email = models.EmailField(max_length=100, default='user@example.com')
    

    def __str__(self):
        return self.pseudo


class Article(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)

class Videos(models.Model):
    title = models.CharField(max_length=100)
    url = models.URLField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
