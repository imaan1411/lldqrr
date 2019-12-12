import io.dropwizard.Application;
import io.dropwizard.setup.Environment;

public class LldqrrLocalServerApplication extends Application<LldqrrConfiguration> {
    public void run(LldqrrConfiguration lldqrrConfiguration, Environment environment) throws Exception {
        environment.jersey().setUrlPattern("/api/");

        for (Class<?> c : new LldqrrApplication().getClasses()) {
            environment.jersey().register(c);
        }
    }

    public static void main(String[] args) throws Exception {
        new LldqrrLocalServerApplication().run(args);
    }
}
