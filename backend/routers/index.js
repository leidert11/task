const routex = require("express-promise-router");
const vehiculo = require("./vehicle");
const empleado = require("./employee");
const proveedor = require("./provider");
const departamentoServicio = require("./serviceDepartment");
const historialServicio = require("./serviceHistory");
const proveedorServicio = require("./providerService");
const ventas = require("./sales");
const clientesPotenciales = require("./potentialCustomer");
const departamentoVentas = require("./saleDepartment");

const router = routex();

// router.use("/vehiculo", vehiculo);
// router.use("/empleado", empleado);
// router.use("/proveedor", proveedor);
// router.use("/departamentoServicio", departamentoServicio);
// router.use("/historialServicio", historialServicio);
// router.use("/proveedorServicio", proveedorServicio);
// router.use("/ventas", ventas);
// router.use("/clientesPotenciales", clientesPotenciales);
// router.use("/departamentoVentas", departamentoVentas);

module.exports = router;
