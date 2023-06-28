# Generated by Django 4.2.2 on 2023-06-28 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carhub', '0004_profile'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('message', models.CharField(max_length=280)),
                ('group', models.CharField(max_length=200)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
