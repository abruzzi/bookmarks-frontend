FROM python:2.7

RUN mkdir /webapp
COPY ./start.sh /webapp/start.sh
COPY ./public /webapp

ENV PORT 8080

WORKDIR /webapp
CMD /webapp/start.sh