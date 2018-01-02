import { Component, OnInit } from '@angular/core';
import { CustomerUsage } from '../services/entities/customer-usage.model';
import { UsageService } from '../services/usage/usage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Message } from 'primeng/components/common/api';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-change-usage',
  templateUrl: './change-usage.component.html',
  styleUrls: ['./change-usage.component.css']
})
export class ChangeUsageComponent implements OnInit {

  public inpAccount: string;
  public inpAmount: number;
  public changeDirection: string;
  public msgs: Message[] = [];
  public showPanel: boolean;

  public totalUsage: number;

  private MESSAGE_SEVERITY_SUCCESS = 'success';
  private MESSAGE_SEVERITY_ERROR = 'error';
  private MESSAGE_SUMMARY_INCREASE_USAGE = 'Increase Usage';
  private MESSAGE_SUMMARY_DECREASE_USAGE = 'Decrease Usage';

  constructor(private usageService: UsageService) { }

  ngOnInit() {
    this.changeDirection = 'INCREASE';
    this.showPanel = false;
  }

  private increaseUsage(customerUsage: CustomerUsage): Observable<CustomerUsage> {
    return this.usageService.increaseUsageAmount(customerUsage);
  }

  private decreaseUsage(customerUsage: CustomerUsage): Observable<CustomerUsage> {
    return this.usageService.decreaseUsageAmount(customerUsage);
  }

  public changeUsage() {
    this.showPanel = false;
    const inpCustomerUsage: CustomerUsage = new CustomerUsage();
    inpCustomerUsage.accountNumber = this.inpAccount;
    inpCustomerUsage.currentUsage = this.inpAmount;

    let obs: Observable<CustomerUsage>;
    let summary: string;
    if (this.changeDirection === 'INCREASE') {
      obs = this.increaseUsage(inpCustomerUsage);
      summary = this.MESSAGE_SUMMARY_INCREASE_USAGE;
    } else {
      obs = this.decreaseUsage(inpCustomerUsage);
      summary = this.MESSAGE_SUMMARY_DECREASE_USAGE;
    }

    obs.subscribe(
      data => {
        const successMsg = `Successfully changed usage`;
        this.displaySuccess(summary, successMsg);
        this.totalUsage = data.totalUsage;
      },
      (err: HttpErrorResponse) => {
        let errMsg: string;
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          errMsg = `${summary} webservice error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong
          if (err.status === 400) {
            errMsg = `Invalid Usage information`;
          } else {
            errMsg = `${summary} webservice returned code ${err.status}, body was: ${err.error}`;
          }
        }
        console.log(errMsg);
        this.displayError(summary, errMsg);
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
