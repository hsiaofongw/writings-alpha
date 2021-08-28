@Injectable()
export class EnvProbService {

    // ...

    getEnv(): 'dev' | 'prod' | 'unknown' {
        // ...
    }
}
