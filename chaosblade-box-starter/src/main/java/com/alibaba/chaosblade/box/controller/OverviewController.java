package com.alibaba.chaosblade.box.controller;

import com.alibaba.chaosblade.box.annotation.LoginUser;
import com.alibaba.chaosblade.box.common.common.domain.BaseRequest;
import com.alibaba.chaosblade.box.common.common.domain.PageQueryResponse;
import com.alibaba.chaosblade.box.common.common.domain.user.ChaosUser;
import com.alibaba.chaosblade.box.model.RestResponseUtil;
import com.alibaba.chaosblade.box.service.model.RestResponse;
import com.alibaba.chaosblade.box.service.model.overview.*;
import groovy.util.logging.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author sunpeng
 *
 *
 */
@RestController
@Slf4j
public class OverviewController extends BaseController {

    private static Logger logger = LoggerFactory.getLogger("UserLogTest");

    @Resource
    private OverviewService overviewService;

    @PostMapping("UserExperimentOverviewInfo")
    public RestResponse<OverviewExperimentCount> userExperimentOverviewInfo(@LoginUser ChaosUser chaosUser, @RequestBody OverviewRequest overviewRequest) {
        logger.info(chaosUser.getUserName());
        overviewRequest.setUser(chaosUser);
        return RestResponseUtil.initWithServiceResponse(overviewService.getUserExperimentCount(overviewRequest));
    }

    @PostMapping("UserExperimentByDayOverviewInfo")
    public RestResponse<OverviewExperimentTask> userExperimentByDayOverviewInfo(@LoginUser ChaosUser chaosUser) {
        return RestResponseUtil.initWithServiceResponse(overviewService.getUserExperimentDayCount(chaosUser));
    }

    @PostMapping("UserAgentOverviewInfo")
    public RestResponse<OverviewAgent> userAgentOverviewInfo(@LoginUser ChaosUser chaosUser) {
        return RestResponseUtil.initWithServiceResponse(overviewService.getUserAgentCount(chaosUser));
    }

    @PostMapping("ProductMessageOverviewInfo")
    public RestResponse<OverviewProduct> productMessageOverviewInfo(@LoginUser ChaosUser chaosUser) {
        return RestResponseUtil.initWithServiceResponse(overviewService.getProductMessage(chaosUser));
    }

    @PostMapping("UserSceneOverview")
    public RestResponse<List<OverviewScene>> userSceneOverview(@LoginUser ChaosUser chaosUser, @RequestBody BaseRequest baseRequest) {
        return RestResponseUtil.initWithServiceResponse(overviewService.getUserScene(chaosUser, baseRequest));
    }

    @PostMapping("UserExpertiseOverview")
    public RestResponse<PageQueryResponse<OverviewExpertise>> userExpertiseOverview(@LoginUser ChaosUser chaosUser, @RequestBody OverviewRequest overviewRequest) {
        return RestResponseUtil.initWithServiceResponse(overviewService.getUserExpertise(chaosUser,overviewRequest));
    }


}
