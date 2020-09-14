from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.
class MyAccountManager(BaseUserManager):

    # the parameter will contains things that are required upon registration
    def create_user(self, email, username, firstName=None, lastName= None, role = None, accessLevel = None,group = None,password= None):

        if not email:
            raise ValueError("Users must have email address")
        if not username:
            raise ValueError("Users must have an username")

        user = self.model(
               email =self.normalize_email(email),
               username=username,
               #additional information
               role = role,
               accessLevel = accessLevel,
               group= group,
               lastName = lastName,
               firstName = firstName,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password, role, accessLevel, firstName=None, lastName=None, group=None):

        user = self.create_user(
               email =self.normalize_email(email),
               password = password,
               username=username,
               # additional information
               role = role,
               accessLevel = accessLevel,
               group = group,
               lastName = lastName,
               firstName = firstName,
        )

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True

        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
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
    email = models.EmailField(verbose_name="email", max_length=60, unique=True)
    username = models.CharField(max_length=30, unique=True)
    date_joined = models.DateTimeField(verbose_name="date joined", auto_now_add=True)
    last_login = models.DateTimeField(verbose_name="last login", auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_supersuper = models.BooleanField(default=False)
    
    #additional fields
    firstName = models.CharField(max_length=200,null=True)
    lastName = models.CharField(max_length=200,null=True)
    role  = models.CharField(max_length =200, null=True, choices=ROLES)
    group = models.CharField(max_length =200, null=True, choices = GROUP)
    accessLevel = models.CharField(max_length =200, null=True,choices= LEVEL)

    #this is used for whatever you use login for, in this case I will be using email
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','role','accessLevel']

    # telling where to find the manager

    objects = MyAccountManager()

    def __str__(self):
        return self.email 
    
    #permission by default set to the admin only
    def has_perm(self, perm, obj=None):
        return self.is_admin
    
    #checking simple permission to view app
    def has_module_perms(self, app_label):
        return True