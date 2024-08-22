import {cwd as $5jutT$cwd} from "process";
import $5jutT$express from "express";
import $5jutT$cookieparser from "cookie-parser";
import $5jutT$morgan from "morgan";
import $5jutT$cors from "cors";
import $5jutT$path from "path";








const $91732ee76f5bfc75$var$router = (0, $5jutT$express).Router();
$91732ee76f5bfc75$var$router.get("/", function(req, res, next) {
    res.send({
        layer: "users",
        version: 1
    });
});
var $91732ee76f5bfc75$export$2e2bcd8739ae039 = $91732ee76f5bfc75$var$router;



const $8defc888f79aeed0$var$router = (0, $5jutT$express).Router();
$8defc888f79aeed0$var$router.get("/", function(req, res, next) {
    res.send({
        layer: "api",
        version: 1
    });
});
var $8defc888f79aeed0$export$2e2bcd8739ae039 = $8defc888f79aeed0$var$router;


const $8446b790981b4ec0$var$router = (0, $5jutT$express).Router();
$8446b790981b4ec0$var$router.use("/users", (0, $91732ee76f5bfc75$export$2e2bcd8739ae039));
$8446b790981b4ec0$var$router.use("/api", (0, $8defc888f79aeed0$export$2e2bcd8739ae039));
var $8446b790981b4ec0$export$2e2bcd8739ae039 = $8446b790981b4ec0$var$router;



const $66f91db1d37ca343$var$__server_dirname = $5jutT$cwd ? $5jutT$cwd() : undefined;
const $66f91db1d37ca343$var$app = (0, $5jutT$express)();
console.log({
    x: (0, $5jutT$path).join($66f91db1d37ca343$var$__server_dirname, "/public")
});
$66f91db1d37ca343$var$app.use((0, $5jutT$morgan)("dev"));
$66f91db1d37ca343$var$app.use((0, $5jutT$express).json());
$66f91db1d37ca343$var$app.use((0, $5jutT$express).urlencoded({
    extended: false
}));
$66f91db1d37ca343$var$app.use((0, $5jutT$cookieparser)());
$66f91db1d37ca343$var$app.use((0, $5jutT$express).static((0, $5jutT$path).join($66f91db1d37ca343$var$__server_dirname, "/server/public")));
$66f91db1d37ca343$var$app.use((0, $5jutT$cors)());
$66f91db1d37ca343$var$app.use("/", (0, $8446b790981b4ec0$export$2e2bcd8739ae039));
$66f91db1d37ca343$var$app.listen(3000);


//# sourceMappingURL=module.js.map
