from django.urls import path
from Log import views
from . import views

urlpatterns = [
    path("Log", views.Log, name="Log"),
    
    
]