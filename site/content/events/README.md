# [Belarus Java User Group](https://heapy.io/bjug)

[![Build Status](https://travis-ci.org/Heapy/bjug.by.svg?branch=master)](https://travis-ci.org/Heapy/bjug.by)

Site of Belarus Java User Group

## Что мы делаем

* [Сайт Belarus Java User Group](https://heapy.io/bjug)
* ICS Календарь: [https://heapy.io/bjug/calendar.ics](https://heapy.io/bjug/calendar.ics) — календарь со всеми событиями из мира JVM в Беларуси (поддерживается в: Google Calendar, Apple Calendar, Evolution, Mozilla Thunderbird, Microsoft Outlook, etc)

## Предназначение

* Общее место для анонсов всех сообществ Java разработчиков Беларуси. (Делайтет пул реквесты!)

## Как добавить событие

1. Создать `yml` с описанием события для календаря. [Пример](https://github.com/Heapy/bjug.by/blob/master/events/bkug6.yml).
1. Создать `md` с описанием события для сайта. [Пример](https://github.com/Heapy/bjug.by/blob/master/content/blog/java-professionals-by-17.md).

## Как локально запустить сервер

1. Склонировать репозиторий
2. Внутри проекта проинициализировать submodules `git submodule update --init --recursive`
3. Установить [Hugo](https://gohugo.io/)
4. `hugo serve --buildFuture` и перейти по предложенной ссылке
