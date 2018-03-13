import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';

const { SERVER_PORT = 9000 } = process.env;
const server = new Koa();
const router = new Router();

router.post('/graphql', koaBody(), graphqlKoa({}));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));
server
  .use(router.routes())
  .use(router.allowedMethods());



server.listen(SERVER_PORT, () => console.log(`Strated on port: ${SERVER_PORT}`));
