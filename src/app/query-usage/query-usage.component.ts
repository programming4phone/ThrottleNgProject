import { Component, OnInit } from '@angular/core';
import { TierService } from '../services/tier/tier.service';
import { CustomerUsage } from '../services/entities/customer-usage.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Message } from 'primeng/components/common/api';


@Component({
  selector: 'app-query-usage',
  templateUrl: './query-usage.component.html',
  styleUrls: ['./query-usage.component.css']
})
export class QueryUsageComponent implements OnInit {

  public inpAccount: string;
  public msgs: Message[] = [];
  public showPanel: boolean;

  public totalUsage: number;
  public usageTier: string;

  private MESSAGE_SEVERITY_SUCCESS = 'success';
  private MESSAGE_SEVERITY_ERROR = 'error';
  private MESSAGE_SUMMARY_QUERY_USAGE = 'Query Usage';

  constructor(private tierService: TierService) { }

  ngOnInit() {
  }

  private getCustomerUsage() {
    this.showPanel = false;
    this.tierService.getCustomerTierUsageAmount(this.inpAccount).subscribe(
      data => {
        this.totalUsage = data.totalUsage;
        this.usageTier = data.speed;
      },
      (err: HttpErrorResponse) => {
        let errMsg: string;
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          errMsg = `getAllTiers webservice error occurred: ${err.error.message}`;
          this.displayError(this.MESSAGE_SUMMARY_QUERY_USAGE, errMsg);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong
          if (err.status === 404) {
            errMsg = `getAllTiers webservice No tiers found`; // This really isn't an error, so no growl is needed only console log
          } else {
            errMsg = `getAllTiers webservice returned code ${err.status}, body was: ${err.error}`;
            this.displayError(this.MESSAGE_SUMMARY_QUERY_USAGE, errMsg);
          }
        }
        console.log(errMsg);
      },
      () => {
          this.showPanel = true;
      });
  }

  private displayError(summaryMsg: string, errMsg: string) {
    this.msgs = [];
    this.msgs.push({severity: this.MESSAGE_SEVERITY_ERROR,
          summary: summaryMsg, detail: errMsg });
  }

  private displaySuccess(summaryMsg: string, successMsg: string) {
    this.msgs = [];
    this.msgs.push({severity: this.MESSAGE_SEVERITY_SUCCESS,
          summary: summaryMsg, detail: successMsg });
  }
}
