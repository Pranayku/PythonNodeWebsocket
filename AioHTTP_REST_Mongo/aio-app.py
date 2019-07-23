from aiohttp.web import Application, run_app

from aiohttp_rest import RestResource
from models import Notes
from sqlalchemy import engine_from_config


notes = {}
app = Application()
person_resource = RestResource('notes', Notes, notes, ('title', 'description', 'created_at', 'created_by', 'priority'), 'title')
person_resource.register(app.router)


if __name__ == '__main__':

    run_app(app)