import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, Max, Min } from "class-validator";
import { IPaginateRequest } from "./pagination.interface";
import {
  MAX_PAGINATION_TAKEN,
  MIN_PAGINATION_TAKEN,
  PAGE_TAKEN,
  PAGINATION_TAKEN,
} from "./constants";

export class PaginateDto implements IPaginateRequest {
  @ApiPropertyOptional({
    name: "take",
  })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @Max(MAX_PAGINATION_TAKEN)
  @Min(MIN_PAGINATION_TAKEN)
  take?: number = PAGINATION_TAKEN;

  @ApiPropertyOptional({
    name: "page",
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number = PAGE_TAKEN;
}
