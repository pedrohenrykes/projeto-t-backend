export default class ForeignFields {
  public foreign(table, field, references, inTable) {
    table.foreign(field, `fk_${table._tableName}_${field}`).references(references).inTable(inTable);
    table.index(field, `idx_${table._tableName}_${field}`);
  }
}