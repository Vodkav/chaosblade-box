package com.alibaba.chaosblade.box.auth;

import com.alibaba.chaosblade.box.annotation.LoginUser;
import com.alibaba.chaosblade.box.common.common.domain.user.ChaosUser;
import com.alibaba.chaosblade.box.common.infrastructure.ChaosApplicationContext;
import com.alibaba.chaosblade.box.common.infrastructure.ChaosRequestContextHolder;
import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import javax.servlet.http.HttpServletRequest;
import java.lang.annotation.Annotation;
import java.util.function.Consumer;

/**
 * @author haibin
 * 
 *
 */
public class UserWebArgumentResolver implements HandlerMethodArgumentResolver {

//    private LoginUserResolver loginUserResolver;

//    private VbLoginUserResolver vbLoginUserResolver;

//    public UserWebArgumentResolver(VbLoginUserResolver vbLoginUserResolver) {
//        this.vbLoginUserResolver = vbLoginUserResolver;
//    }

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        return parameter.getParameterType().isAssignableFrom(ChaosUser.class)
                && parameter.hasParameterAnnotation(LoginUser.class);
    }

    private LoginUser existAnnoation(MethodParameter methodParameter) {
        Annotation[] annotations = methodParameter.getParameterAnnotations();
        for (Annotation annotation : annotations) {
            if (LoginUser.class.isInstance(annotation)) {
                return (LoginUser)annotation;
            }
        }
        return null;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer,
        NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        return (ChaosUser) webRequest.getAttribute("CURRENT_USER", RequestAttributes.SCOPE_REQUEST);
    }
}
