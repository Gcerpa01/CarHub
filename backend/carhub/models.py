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
    expiration_date = models.CharField(max_length=5)
    billing_address = models.TextField()

    def __str__(self):
        return self.name


class Message(models.Model):
    name = models.CharField(max_length=200)
    message = models.CharField(max_length=280)  # Use Twitter max
    group = models.CharField(max_length=200)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name + ' ' + self.group

class Product(models.Model):
    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()

    def __str__(self):
        return self.title

class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def subtotal(self):
        return self.product.price * self.quantity

    def __str__(self):
        return f"{self.product.title} ({self.quantity})"