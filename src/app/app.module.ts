import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PollComponent } from './poll/poll.component';
import { PollVoteComponent } from './poll-vote/poll-vote.component';

@NgModule({
  declarations: [AppComponent, CreatePollComponent, PollComponent, PollVoteComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
