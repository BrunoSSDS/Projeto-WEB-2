'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
        'Aluno',
        'professor_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Professor',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
    )

    await queryInterface.addColumn(
        'Materia',
        'aluno_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Aluno',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
    )
  
  await queryInterface.addColumn(
    'Materia',
    'usuario_id',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Usuario',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
)
await queryInterface.addColumn(
  'Aluno',
  'usuario_id',
  {
    type: Sequelize.INTEGER,
    references: {
      model: 'Usuario',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
)
await queryInterface.addColumn(
  'Professor',
  'usuario_id',
  {
    type: Sequelize.INTEGER,
    references: {
      model: 'Usuario',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
)


},

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
        'Aluno',
        'professor_id'
    )
    await queryInterface.removeColumn(
        'Materia',
        'aluno_id'   
    )
    await queryInterface.removeColumn(
      'Materia',
      'usuario_id'
    )
    await queryInterface.removeColumn(
      'Aluno',
      'usuario_id'
    )
    await queryInterface.removeColumn(
      'Professor',
      'usuario_id'
    )

  }
};
