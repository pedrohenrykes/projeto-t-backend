export default class AuditoryFields {
  private generateFields(table, field, isNullable){
    const fieldBy = `${field}_by`;
    const fieldAt = `${field}_at`;

    if (isNullable) {
      table.integer(fieldBy).nullable();
      table.timestamp(fieldAt).nullable();
    } else {
      table.integer(fieldBy).notNullable();
      table.timestamp(fieldAt).notNullable();
    }
  }

  private created(table, isNullable){
    this.generateFields(table, 'created', isNullable);
  }

  private updated(table, isNullable){
    this.generateFields(table, 'updated', isNullable);
  }

  private deleted(table, isNullable){
    this.generateFields(table, 'deleted', isNullable);
  }

  public basics(table, isNullable){
    this.created(table, isNullable);
    this.updated(table, isNullable);
  }

  public all(table, isNullable){
    this.basics(table, isNullable);
    this.deleted(table, isNullable);
  }
}
