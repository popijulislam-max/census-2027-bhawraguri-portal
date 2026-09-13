import {json,requireAdmin} from '../_utils.js';export async function onRequestGet({request,env}){return json({auth:await requireAdmin(request,env)})}
