# Generated by Django 3.0.10 on 2020-09-14 07:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('email', models.EmailField(max_length=60, unique=True, verbose_name='email')),
                ('username', models.CharField(max_length=30, unique=True)),
                ('date_joined', models.DateTimeField(auto_now_add=True, verbose_name='date joined')),
                ('last_login', models.DateTimeField(auto_now=True, verbose_name='last login')),
                ('is_admin', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_supersuper', models.BooleanField(default=False)),
                ('firstName', models.CharField(max_length=200, null=True)),
                ('lastName', models.CharField(max_length=200, null=True)),
                ('role', models.CharField(choices=[('Admin', 'Admin'), ('Customer', 'Customer'), ('Technician', 'Technician')], max_length=200, null=True)),
                ('group', models.CharField(choices=[('SG1', 'SG1'), ('SG2', 'SG2'), ('SG3', 'SG3')], max_length=200, null=True)),
                ('accessLevel', models.CharField(choices=[('Full', 'Full'), ('Extended', 'Extended'), ('Standard', 'Standard')], max_length=200, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
