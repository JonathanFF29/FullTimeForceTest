import { Body, Controller, Get, Post } from '@nestjs/common';
import { GitService } from './git/git.service';
import { AuthService } from './auth/auth.service';


@Controller()
export class AppController {}