import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuthService } from "../auth/auth.service";

declare interface SERVICE {}

declare const RESOURCE: string;

declare class CONTROLLER_BASE {
  protected readonly service: SERVICE;
  constructor(service: SERVICE);
}

@swagger.ApiTags(RESOURCE)
@common.Controller(RESOURCE)
export class CONTROLLER extends CONTROLLER_BASE {
  constructor(protected readonly service: SERVICE, protected readonly authService: AuthService) {
    super(service, authService);
  }
}