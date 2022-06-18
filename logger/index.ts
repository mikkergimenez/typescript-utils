import logfmt from 'logfmt';

function error(message: string, object?: any) {
    console.error(logfmt.stringify({...object, message}))   
}

function debug(message: string, object?: any) {
    console.log(logfmt.stringify({...object, message}))   
}

function warn(message: string, object?: any) {
    console.log(logfmt.stringify({...object, message}))   
}

function info(message: string, object?: any) {
    console.log(logfmt.stringify({...object, message}))   
}

module.exports = {
    debug, error, info, warn
}