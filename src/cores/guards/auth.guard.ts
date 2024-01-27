import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard as AuthGuardBuildIn } from '@nestjs/passport';

@Injectable()
class Local extends AuthGuardBuildIn('local') {}

export const AuthGuard = {
  UseLocalAuthGuard: function () {
    return UseGuards(Local);
  },
};
