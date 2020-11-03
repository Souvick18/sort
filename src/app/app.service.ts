import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  API_CONTEXT = 'https://bfs-map-rest.azurewebsites.net/bfsmap/v1/';

  constructor(private apiClient: HttpClient) { }

  public retrieveUserbyID(userId: string) {
    let API_URL: string = this.API_CONTEXT.concat('user/:userId');
    API_URL = API_URL.replace(':userId', userId);
    return this.apiClient.get(API_URL);
  }

  public loginUser(userCredential: string) {
    const API_URL: string = this.API_CONTEXT.concat('user/login');
    const API_PARAMS = {cred: userCredential};
    return this.apiClient.get(API_URL, {params : API_PARAMS});
  }

  public connectUserMailbox(authSensitive: any, userId: string) {
    let API_URL: string = this.API_CONTEXT.concat('user/:userId/connect_mailbox');
    API_URL = API_URL.replace(':userId', userId);
    return this.apiClient.post(API_URL, authSensitive);
  }

  public disconnectUserMailbox(userId: string) {
    let API_URL: string = this.API_CONTEXT.concat('user/:userId/disconnect_mailbox');
    API_URL = API_URL.replace(':userId', userId);
    return this.apiClient.delete(API_URL);
  }

  public retrieveMailboxSignature(userId: string) {
    let API_URL: string = this.API_CONTEXT.concat('user/:userId/mailbox_signature');
    API_URL = API_URL.replace(':userId', userId);
    return this.apiClient.get(API_URL);
  }

  public updateMailboxSignature(userId: string, signature: any) {
    let API_URL: string = this.API_CONTEXT.concat('user/:userId/mailbox_signature');
    API_URL = API_URL.replace(':userId', userId);
    return this.apiClient.put(API_URL, signature);
  }

  public retrieveAllProspect() {
    const API_URL: string = this.API_CONTEXT.concat('prospect-composite');
    return this.apiClient.get(API_URL);
  }

  public retrieveProspectById(prospectId: string) {
    let API_URL: string = this.API_CONTEXT.concat('prospect/:prospectId');
    API_URL = API_URL.replace(':prospectId', prospectId);
    return this.apiClient.get(API_URL);
  }

  public createProspect(prospect: any) {
    const API_URL: string = this.API_CONTEXT.concat('prospect');
    return this.apiClient.post(API_URL, prospect);
  }

  public updateProspect(prospectId: string, prospect: any) {
    let API_URL: string = this.API_CONTEXT.concat('prospect/:prospectId');
    API_URL = API_URL.replace(':prospectId', prospectId);
    return this.apiClient.put(API_URL, prospect);
  }

  public createProspectInBulk(bulkProspect: any) {
    const API_URL: string = this.API_CONTEXT.concat('prospect-group');
    return this.apiClient.post(API_URL, bulkProspect);
  }

  public retrieveAllProspectGroups() {
    const API_URL: string = this.API_CONTEXT.concat('prospect-group');
    return this.apiClient.get(API_URL);
  }

  public retrieveProspectTemplate() {
    const API_URL: string = this.API_CONTEXT.concat('prospect-template');
    return this.apiClient.get(API_URL);
  }

  public downloadProspectTemplateSample() {
    const API_URL: string = this.API_CONTEXT.concat('prospect-template/download_template');
    return this.apiClient.get(API_URL, {responseType: 'arraybuffer'});
  }

  public retrieveAllSchedulerTZ() {
    const API_URL: string = this.API_CONTEXT.concat('scheduler-tz');
    return this.apiClient.get(API_URL);
  }

  public retrieveAllScheduler() {
    const API_URL: string = this.API_CONTEXT.concat('scheduler');
    return this.apiClient.get(API_URL);
  }

  public createScheduler(scheduler: any) {
    const API_URL: string = this.API_CONTEXT.concat('scheduler');
    return this.apiClient.post(API_URL, scheduler);
  }

  public updateScheduler(schedulerId: string, scheduler: any) {
    let API_URL: string = this.API_CONTEXT.concat('scheduler/:schedulerId');
    API_URL = API_URL.replace(':schedulerId', schedulerId);
    return this.apiClient.put(API_URL, scheduler);
  }

  public retrieveAllDNC() {
    const API_URL: string = this.API_CONTEXT.concat('dnc');
    return this.apiClient.get(API_URL);
  }

  public createDNC(dnc: any) {
    const API_URL: string = this.API_CONTEXT.concat('dnc');
    return this.apiClient.post(API_URL, dnc);
  }

  public markDNC(request: any, prospectId: string) {
    let API_URL: string = this.API_CONTEXT.concat('prospect/:prospectId/mark_dnc');
    API_URL = API_URL.replace(':prospectId', prospectId);
    return this.apiClient.put(API_URL, request);
  }

  public retrieveAllCampaign() {
    const API_URL: string = this.API_CONTEXT.concat('campaign-composite');
    return this.apiClient.get(API_URL);
  }

  public retrieveCampaignById(campaignId: string) {
    let API_URL: string = this.API_CONTEXT.concat('campaign/:campaignId');
    API_URL = API_URL.replace(':campaignId', campaignId);
    return this.apiClient.get(API_URL);
  }

  public retrieveCampaignStepByCampaignId(campaignId: string) {
    const API_URL: string = this.API_CONTEXT.concat('campaign-step');
    const API_PARAMS = {campaign_id: campaignId};
    return this.apiClient.get(API_URL, {params : API_PARAMS});
  }

  public retrieveCampaignLog(campaignId: string, stepId: string) {
    const API_URL: string = this.API_CONTEXT.concat('campaign-runlog');
    const API_PARAMS = {campaign_id: campaignId, step_id: stepId};
    return this.apiClient.get(API_URL, {params : API_PARAMS});
  }

  public retrieveEmailTemplateById(emailTemplateId: string) {
    let API_URL: string = this.API_CONTEXT.concat('campaign-step-email/:emailTemplateId');
    API_URL = API_URL.replace(':emailTemplateId', emailTemplateId);
    return this.apiClient.get(API_URL);
  }

  public createCampaign(campaign: any) {
    const API_URL: string = this.API_CONTEXT.concat('campaign');
    return this.apiClient.post(API_URL, campaign);
  }

  public addCampaignStep(step: any) {
    const API_URL: string = this.API_CONTEXT.concat('campaign-step');
    return this.apiClient.post(API_URL, step);
  }

  public unsubscribeCampaign(campaignId: string, stepId: string, prospectId: string) {
    let API_URL: string = this.API_CONTEXT.concat('campaign-email/unsubscribe/cm:campaignId-st:stepId-pr:prospectId');
    API_URL = API_URL.replace(':campaignId', campaignId).replace(':stepId', stepId).replace(':prospectId', prospectId);
    return this.apiClient.get(API_URL);
  }
}
