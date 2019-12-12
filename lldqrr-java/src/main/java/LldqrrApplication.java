import com.google.common.collect.Sets;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.Set;


@ApplicationPath("api")
public class LldqrrApplication extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        return Sets.newHashSet(Test.class, //
                Test2.class);
    }
}
