// https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IngressV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#wait_for_load_balancer IngressV1#wait_for_load_balancer}
  */
  readonly waitForLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#metadata IngressV1#metadata}
  */
  readonly metadata: IngressV1Metadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#spec IngressV1#spec}
  */
  readonly spec: IngressV1Spec;
}
export class IngressV1StatusLoadBalancerIngress extends cdktf.ComplexComputedList {

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export class IngressV1StatusLoadBalancer extends cdktf.ComplexComputedList {

  // ingress - computed: true, optional: false, required: false
  public get ingress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress') as any;
  }
}
export class IngressV1Status extends cdktf.ComplexComputedList {

  // load_balancer - computed: true, optional: false, required: false
  public get loadBalancer() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('load_balancer') as any;
  }
}
export interface IngressV1Metadata {
  /**
  * An unstructured key value map stored with the ingress that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#annotations IngressV1#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#generate_name IngressV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the ingress. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#labels IngressV1#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the ingress, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#name IngressV1#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the ingress must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#namespace IngressV1#namespace}
  */
  readonly namespace?: string;
}

function ingressV1MetadataToTerraform(struct?: IngressV1MetadataOutputReference | IngressV1Metadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class IngressV1MetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string | undefined; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string | undefined) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}
export interface IngressV1SpecDefaultBackendResource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#api_group IngressV1#api_group}
  */
  readonly apiGroup: string;
  /**
  * The kind of resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#kind IngressV1#kind}
  */
  readonly kind: string;
  /**
  * The name of the User to bind to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#name IngressV1#name}
  */
  readonly name: string;
}

function ingressV1SpecDefaultBackendResourceToTerraform(struct?: IngressV1SpecDefaultBackendResourceOutputReference | IngressV1SpecDefaultBackendResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class IngressV1SpecDefaultBackendResourceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // api_group - computed: false, optional: false, required: true
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }
}
export interface IngressV1SpecDefaultBackendServicePort {
  /**
  * Specifies the name of the port of the referenced service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#name IngressV1#name}
  */
  readonly name?: number;
  /**
  * Specifies the numerical port of the referenced service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#number IngressV1#number}
  */
  readonly number?: number;
}

function ingressV1SpecDefaultBackendServicePortToTerraform(struct?: IngressV1SpecDefaultBackendServicePortOutputReference | IngressV1SpecDefaultBackendServicePort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.numberToTerraform(struct!.name),
    number: cdktf.numberToTerraform(struct!.number),
  }
}

export class IngressV1SpecDefaultBackendServicePortOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: true, required: false
  private _name?: number | undefined; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // number - computed: false, optional: true, required: false
  private _number?: number | undefined; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number | undefined) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number
  }
}
export interface IngressV1SpecDefaultBackendService {
  /**
  * Specifies the name of the referenced service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#name IngressV1#name}
  */
  readonly name: string;
  /**
  * port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#port IngressV1#port}
  */
  readonly port: IngressV1SpecDefaultBackendServicePort;
}

function ingressV1SpecDefaultBackendServiceToTerraform(struct?: IngressV1SpecDefaultBackendServiceOutputReference | IngressV1SpecDefaultBackendService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: ingressV1SpecDefaultBackendServicePortToTerraform(struct!.port),
  }
}

export class IngressV1SpecDefaultBackendServiceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // port - computed: false, optional: false, required: true
  private _port?: IngressV1SpecDefaultBackendServicePort; 
  private __portOutput = new IngressV1SpecDefaultBackendServicePortOutputReference(this as any, "port", true);
  public get port() {
    return this.__portOutput;
  }
  public putPort(value: IngressV1SpecDefaultBackendServicePort) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }
}
export interface IngressV1SpecDefaultBackend {
  /**
  * resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#resource IngressV1#resource}
  */
  readonly resource?: IngressV1SpecDefaultBackendResource;
  /**
  * service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#service IngressV1#service}
  */
  readonly service?: IngressV1SpecDefaultBackendService;
}

function ingressV1SpecDefaultBackendToTerraform(struct?: IngressV1SpecDefaultBackendOutputReference | IngressV1SpecDefaultBackend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: ingressV1SpecDefaultBackendResourceToTerraform(struct!.resource),
    service: ingressV1SpecDefaultBackendServiceToTerraform(struct!.service),
  }
}

export class IngressV1SpecDefaultBackendOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: IngressV1SpecDefaultBackendResource | undefined; 
  private __resourceOutput = new IngressV1SpecDefaultBackendResourceOutputReference(this as any, "resource", true);
  public get resource() {
    return this.__resourceOutput;
  }
  public putResource(value: IngressV1SpecDefaultBackendResource | undefined) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
  }

  // service - computed: false, optional: true, required: false
  private _service?: IngressV1SpecDefaultBackendService | undefined; 
  private __serviceOutput = new IngressV1SpecDefaultBackendServiceOutputReference(this as any, "service", true);
  public get service() {
    return this.__serviceOutput;
  }
  public putService(value: IngressV1SpecDefaultBackendService | undefined) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }
}
export interface IngressV1SpecRuleHttpPathBackendResource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#api_group IngressV1#api_group}
  */
  readonly apiGroup: string;
  /**
  * The kind of resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#kind IngressV1#kind}
  */
  readonly kind: string;
  /**
  * The name of the User to bind to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#name IngressV1#name}
  */
  readonly name: string;
}

function ingressV1SpecRuleHttpPathBackendResourceToTerraform(struct?: IngressV1SpecRuleHttpPathBackendResourceOutputReference | IngressV1SpecRuleHttpPathBackendResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class IngressV1SpecRuleHttpPathBackendResourceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // api_group - computed: false, optional: false, required: true
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }
}
export interface IngressV1SpecRuleHttpPathBackendServicePort {
  /**
  * Specifies the name of the port of the referenced service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#name IngressV1#name}
  */
  readonly name?: number;
  /**
  * Specifies the numerical port of the referenced service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#number IngressV1#number}
  */
  readonly number?: number;
}

function ingressV1SpecRuleHttpPathBackendServicePortToTerraform(struct?: IngressV1SpecRuleHttpPathBackendServicePortOutputReference | IngressV1SpecRuleHttpPathBackendServicePort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.numberToTerraform(struct!.name),
    number: cdktf.numberToTerraform(struct!.number),
  }
}

export class IngressV1SpecRuleHttpPathBackendServicePortOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: true, required: false
  private _name?: number | undefined; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // number - computed: false, optional: true, required: false
  private _number?: number | undefined; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number | undefined) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number
  }
}
export interface IngressV1SpecRuleHttpPathBackendService {
  /**
  * Specifies the name of the referenced service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#name IngressV1#name}
  */
  readonly name: string;
  /**
  * port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#port IngressV1#port}
  */
  readonly port: IngressV1SpecRuleHttpPathBackendServicePort;
}

function ingressV1SpecRuleHttpPathBackendServiceToTerraform(struct?: IngressV1SpecRuleHttpPathBackendServiceOutputReference | IngressV1SpecRuleHttpPathBackendService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: ingressV1SpecRuleHttpPathBackendServicePortToTerraform(struct!.port),
  }
}

export class IngressV1SpecRuleHttpPathBackendServiceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // port - computed: false, optional: false, required: true
  private _port?: IngressV1SpecRuleHttpPathBackendServicePort; 
  private __portOutput = new IngressV1SpecRuleHttpPathBackendServicePortOutputReference(this as any, "port", true);
  public get port() {
    return this.__portOutput;
  }
  public putPort(value: IngressV1SpecRuleHttpPathBackendServicePort) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }
}
export interface IngressV1SpecRuleHttpPathBackend {
  /**
  * resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#resource IngressV1#resource}
  */
  readonly resource?: IngressV1SpecRuleHttpPathBackendResource;
  /**
  * service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#service IngressV1#service}
  */
  readonly service?: IngressV1SpecRuleHttpPathBackendService;
}

function ingressV1SpecRuleHttpPathBackendToTerraform(struct?: IngressV1SpecRuleHttpPathBackendOutputReference | IngressV1SpecRuleHttpPathBackend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: ingressV1SpecRuleHttpPathBackendResourceToTerraform(struct!.resource),
    service: ingressV1SpecRuleHttpPathBackendServiceToTerraform(struct!.service),
  }
}

export class IngressV1SpecRuleHttpPathBackendOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: IngressV1SpecRuleHttpPathBackendResource | undefined; 
  private __resourceOutput = new IngressV1SpecRuleHttpPathBackendResourceOutputReference(this as any, "resource", true);
  public get resource() {
    return this.__resourceOutput;
  }
  public putResource(value: IngressV1SpecRuleHttpPathBackendResource | undefined) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
  }

  // service - computed: false, optional: true, required: false
  private _service?: IngressV1SpecRuleHttpPathBackendService | undefined; 
  private __serviceOutput = new IngressV1SpecRuleHttpPathBackendServiceOutputReference(this as any, "service", true);
  public get service() {
    return this.__serviceOutput;
  }
  public putService(value: IngressV1SpecRuleHttpPathBackendService | undefined) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }
}
export interface IngressV1SpecRuleHttpPath {
  /**
  * Path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/'. When unspecified, all paths from incoming requests are matched.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#path IngressV1#path}
  */
  readonly path?: string;
  /**
  * PathType determines the interpretation of the Path matching. PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by '/'. Matching is
  done on a path element by element basis. A path element refers is the
  list of labels in the path split by the '/' separator. A request is a
  match for path p if every p is an element-wise prefix of p of the
  request path. Note that if the last element of the path is a substring
  of the last element in request path, it is not a match (e.g. /foo/bar
  matches /foo/bar/baz, but does not match /foo/barbaz).
* ImplementationSpecific: Interpretation of the Path matching is up to
  the IngressClass. Implementations can treat this as a separate PathType
  or treat it identically to Prefix or Exact path types.
Implementations are required to support all path types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#path_type IngressV1#path_type}
  */
  readonly pathType?: string;
  /**
  * backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#backend IngressV1#backend}
  */
  readonly backend?: IngressV1SpecRuleHttpPathBackend;
}

function ingressV1SpecRuleHttpPathToTerraform(struct?: IngressV1SpecRuleHttpPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    path_type: cdktf.stringToTerraform(struct!.pathType),
    backend: ingressV1SpecRuleHttpPathBackendToTerraform(struct!.backend),
  }
}

export interface IngressV1SpecRuleHttp {
  /**
  * path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#path IngressV1#path}
  */
  readonly path: IngressV1SpecRuleHttpPath[];
}

function ingressV1SpecRuleHttpToTerraform(struct?: IngressV1SpecRuleHttpOutputReference | IngressV1SpecRuleHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.listMapper(ingressV1SpecRuleHttpPathToTerraform)(struct!.path),
  }
}

export class IngressV1SpecRuleHttpOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // path - computed: false, optional: false, required: true
  private _path?: IngressV1SpecRuleHttpPath[]; 
  public get path() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('path') as any;
  }
  public set path(value: IngressV1SpecRuleHttpPath[]) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }
}
export interface IngressV1SpecRule {
  /**
  * Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to
   the IP in the Spec of the parent Ingress.
2. The `:` delimiter is not respected because ports are not allowed.
	  Currently the port of an Ingress is implicitly :80 for http and
	  :443 for https.
Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.

Host can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.bar.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. "*.foo.com"). The wildcard character '*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "*"). Requests will be matched against the Host field in the following way: 1. If Host is precise, the request matches this rule if the http host header is equal to Host. 2. If Host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#host IngressV1#host}
  */
  readonly host?: string;
  /**
  * http block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#http IngressV1#http}
  */
  readonly http: IngressV1SpecRuleHttp;
}

function ingressV1SpecRuleToTerraform(struct?: IngressV1SpecRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http: ingressV1SpecRuleHttpToTerraform(struct!.http),
  }
}

export interface IngressV1SpecTls {
  /**
  * Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#hosts IngressV1#hosts}
  */
  readonly hosts?: string[];
  /**
  * SecretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#secret_name IngressV1#secret_name}
  */
  readonly secretName?: string;
}

function ingressV1SpecTlsToTerraform(struct?: IngressV1SpecTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hosts),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface IngressV1Spec {
  /**
  * IngressClassName is the name of the IngressClass cluster resource. The associated IngressClass defines which controller will implement the resource. This replaces the deprecated `kubernetes.io/ingress.class` annotation. For backwards compatibility, when that annotation is set, it must be given precedence over this field. The controller may emit a warning if the field and annotation have different values. Implementations of this API should ignore Ingresses without a class specified. An IngressClass resource may be marked as default, which can be used to set a default value for this field. For more information, refer to the IngressClass documentation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#ingress_class_name IngressV1#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * default_backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#default_backend IngressV1#default_backend}
  */
  readonly defaultBackend?: IngressV1SpecDefaultBackend;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#rule IngressV1#rule}
  */
  readonly rule?: IngressV1SpecRule[];
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html#tls IngressV1#tls}
  */
  readonly tls?: IngressV1SpecTls[];
}

function ingressV1SpecToTerraform(struct?: IngressV1SpecOutputReference | IngressV1Spec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    default_backend: ingressV1SpecDefaultBackendToTerraform(struct!.defaultBackend),
    rule: cdktf.listMapper(ingressV1SpecRuleToTerraform)(struct!.rule),
    tls: cdktf.listMapper(ingressV1SpecTlsToTerraform)(struct!.tls),
  }
}

export class IngressV1SpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // ingress_class_name - computed: false, optional: true, required: false
  private _ingressClassName?: string | undefined; 
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }
  public set ingressClassName(value: string | undefined) {
    this._ingressClassName = value;
  }
  public resetIngressClassName() {
    this._ingressClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassNameInput() {
    return this._ingressClassName
  }

  // default_backend - computed: false, optional: true, required: false
  private _defaultBackend?: IngressV1SpecDefaultBackend | undefined; 
  private __defaultBackendOutput = new IngressV1SpecDefaultBackendOutputReference(this as any, "default_backend", true);
  public get defaultBackend() {
    return this.__defaultBackendOutput;
  }
  public putDefaultBackend(value: IngressV1SpecDefaultBackend | undefined) {
    this._defaultBackend = value;
  }
  public resetDefaultBackend() {
    this._defaultBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBackendInput() {
    return this._defaultBackend
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: IngressV1SpecRule[] | undefined; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: IngressV1SpecRule[] | undefined) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: IngressV1SpecTls[] | undefined; 
  public get tls() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tls') as any;
  }
  public set tls(value: IngressV1SpecTls[] | undefined) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html kubernetes_ingress_v1}
*/
export class IngressV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_ingress_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_v1.html kubernetes_ingress_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IngressV1Config
  */
  public constructor(scope: Construct, id: string, config: IngressV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_ingress_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._waitForLoadBalancer = config.waitForLoadBalancer;
    this._metadata = config.metadata;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new IngressV1Status(this, 'status', index);
  }

  // wait_for_load_balancer - computed: false, optional: true, required: false
  private _waitForLoadBalancer?: boolean | cdktf.IResolvable | undefined; 
  public get waitForLoadBalancer() {
    return this.getBooleanAttribute('wait_for_load_balancer') as any;
  }
  public set waitForLoadBalancer(value: boolean | cdktf.IResolvable | undefined) {
    this._waitForLoadBalancer = value;
  }
  public resetWaitForLoadBalancer() {
    this._waitForLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForLoadBalancerInput() {
    return this._waitForLoadBalancer
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: IngressV1Metadata; 
  private __metadataOutput = new IngressV1MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: IngressV1Metadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: IngressV1Spec; 
  private __specOutput = new IngressV1SpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: IngressV1Spec) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      wait_for_load_balancer: cdktf.booleanToTerraform(this._waitForLoadBalancer),
      metadata: ingressV1MetadataToTerraform(this._metadata),
      spec: ingressV1SpecToTerraform(this._spec),
    };
  }
}