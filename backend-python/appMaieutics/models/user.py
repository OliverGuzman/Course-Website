from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.contrib.auth.hashers import make_password

class UserManager(BaseUserManager):
    def create_user(self, username, password=None):
        """
        Creates and saves a user with the given username and password.
        """
        if not username:
            raise ValueError('Users must have an username')
        user = self.model(username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user
        
    def create_superuser(self, username, password):
        """
        Creates and saves a superuser with the given username and password.
        """
        user = self.create_user(
            username=username,
            password=password,
            )
        user.is_admin = True
        user.save(using=self._db)
        return user
            
class User(AbstractBaseUser, PermissionsMixin):
    id = models.BigAutoField(primary_key=True)
    username = models.CharField('Username', max_length = 15, unique=True)
    name = models.CharField('Name', max_length = 50)
    last_name = models.CharField('Lastname', max_length = 100)
    email = models.EmailField('Email', max_length = 100)
    password = models.CharField('Password', max_length = 256)
    topics = models.CharField('Topics', max_length=200)
    current_profession = models.CharField('CurrentProfession', max_length=50)
    country = models.CharField('Country', max_length=40)
    date_birth = models.DateField()
    gender = models.CharField('Genero', max_length=30)
    
    def save(self, **kwargs):
        some_salt = 'mMUj0DrIK6vgtdIYepkIxN'
        self.password = make_password(self.password, some_salt)
        super().save(**kwargs)
        
    objects = UserManager()
    USERNAME_FIELD = 'username'