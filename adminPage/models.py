from django.db import models
from django.contrib.auth.models import User
# Create your models here.

"""
class UserProfile(models.Model):
    ROLES = (
        ('Admin','Admin'),
        ('Customer','Customer'),
        ('Technician','Technician'),
    )
    GROUP = (
        ('SG1','SG1'),
        ('SG2','SG2'),
        ('SG3','SG3'),
    )
    LEVEL = (
        ('Full','Full'),
        ('Extended','Extended'),
        ('Standard','Standard'),
    )

    user = models.OneToOneField(User, on_delete= models.CASCADE)

    email = models.EmailField(max_length = 200, null=True)
    group = models.CharField(max_length = 200, null=True, choices = GROUP)
    roles = models.CharField(max_length = 200, null=True, choices=ROLES)
    accessLevel = models.CharField(max_length = 200, null=True,choices= LEVEL)

    def __str__(self):
        return self.username


class userList(models.Model):
    ROLES = (
        ('Admin','Admin'),
        ('Customer','Customer'),
        ('Technician','Technician'),
    )

    username = models.CharField(max_length = 200, null=True)
    group = models.CharField(max_length = 200, null=True)
    roles = models.CharField(max_length = 200, null=True, choices=ROLES)
    email = models.CharField(max_length = 200, null=True)
    phone = models.CharField(max_length = 200, null=True)
    

    def __str__(self):
        return self.username

class groupsList(models.Model):
    GROUP = (
        ('SG1','SG1'),
        ('SG2','SG2'),
        ('SG3','SG3'),
    )
    groupID = models.CharField(max_length = 200, null=True)
    groupName = models.CharField(max_length = 200, null=True, choices= GROUP)

    def __str__(self):
        return self.groupName


class accessLevel(models.Model):
    LEVEL = (
        ('Full','Full'),
        ('Extended','Extended'),
        ('Standard','Standard'),
    )
    accessID = models.CharField(max_length = 200, null=True)
    accessLevel = models.CharField(max_length = 200, null=True,choices= LEVEL)

"""