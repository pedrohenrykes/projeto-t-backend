export default class AuditoryFields {
  private generateFields(table, field){
    const _field = `${field}_by`;

    table.integer(_field);
    table.timestamp(`${field}_at`);
  }

  private created(table){
    this.generateFields(table, 'created');
  }

  private updated(table){
    this.generateFields(table, 'updated');
  }

  private deleted(table){
    this.generateFields(table, 'deleted');
  }

  public basics(table){
    this.created(table);
    this.updated(table);
  }

  public all(table){
    this.basics(table);
    this.deleted(table);
  }
}
