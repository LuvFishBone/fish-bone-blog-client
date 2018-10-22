import jwt from 'jsonwebtoken'
import thenifyAll from 'thenify-all'
import {secret} from '../config'

thenifyAll(jwt, {}, ['verify'])

export default async function (ctx, next) {
    const auth = ctx.get('AuthToken')
    
    const token = auth.split(' ')[1]
    try {
        await jwt.verify(token, secret)
    }
    catch (err) {
        ctx.throw(401, err)
    }
    await next()
}
