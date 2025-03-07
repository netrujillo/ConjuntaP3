--Insertart un donante
INSERT INTO donantes (nombre, contacto)
VALUES 
  ('Supermercado XYZ', 'contacto@xyz.com'),
  ('Restaurante ABC', 'contacto@abc.com'),
  ('Juan Pérez', 'juan.perez@email.com');

-- Insertar un beneficiario
INSERT INTO beneficiarios (nombre, contacto)
VALUES 
  ('Comedor Comunitario 1', 'contacto@comedor1.com'),
  ('Organización Social ABC', 'contacto@abc.org'),
  ('Fundación Ayuda', 'contacto@fundacionayuda.com');

-- Insertar una donación
INSERT INTO donaciones ("tipoAlimento", cantidad, ubicacion, estado, "fechaCreacion", "donanteId")
VALUES 
  ('Frutas', 100, 'Supermercado XYZ - Ciudad A', 'DISPONIBLE', NOW(), 1);

-- Relacionar la donación con el beneficiario usando la tabla intermedia generada por ManyToMany
INSERT INTO donaciones_beneficiarios_beneficiarios ("donacionesId", "beneficiariosId")
VALUES 
  (1, 1);





