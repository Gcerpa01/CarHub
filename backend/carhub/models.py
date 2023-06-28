from django.db import models

class Group(models.Model):
    name = models.CharField(max_length=200)
    members = models.IntegerField()
    description = models.CharField(max_length=500)
    joined = models.BooleanField()
    image = models.URLField(max_length=200)
    def __str__(self):
        return self.name


class Profile(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    bio = models.TextField()
    password = models.CharField(max_length=200)
    notifications_enabled = models.BooleanField()
    preferred_language = models.CharField(max_length=100)
    card_number = models.CharField(max_length=16)
    expiration_date = models.DateField()
    billing_address = models.TextField()

    def __str__(self):
        return self.name



class Message(models.Model):
    name = models.CharField(max_length=200)
    message = models.CharField(max_length=280) ##use twitter max
    group = models.CharField(max_length = 200)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name + ' ' + self.group