from django.urls import path
from sla import views
from . import views

urlpatterns = [
    path('sla', views.sla,name='sla'),
]